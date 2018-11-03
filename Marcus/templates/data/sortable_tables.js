/*
2	
3	On page load, the SortableManager:
4	
5	- Finds the table by its id (sortable_table).
6	- Parses its thead for columns with a "mochi:format" attribute.
7	- Parses the data out of the tbody based upon information given in the
8	  "mochi:format" attribute, and clones the tr elements for later re-use.
9	- Clones the column header th elements for use as a template when drawing 
10	  sort arrow columns.
11	- Stores away a reference to the tbody, as it will be replaced on each sort.
12	- Performs the first sort.
13	
14	
15	On sort request:
16	
17	- Sorts the data based on the given key and direction
18	- Creates a new tbody from the rows in the new ordering
19	- Replaces the column header th elements with clickable versions, adding an
20	   indicator (&uarr; or &darr;) to the most recently sorted column.
21	
22	*/ 
23	 
24	SortableManager = function () { 
25	    this.thead = null; 
26	    this.tbody = null; 
27	    this.columns = []; 
28	    this.rows = []; 
29	    this.sortState = {}; 
30	    this.sortkey = 0; 
31	}; 
32	 
33	mouseOverFunc = function () { 
34	    addElementClass(this, "over"); 
35	}; 
36	 
37	mouseOutFunc = function () { 
38	    removeElementClass(this, "over"); 
39	}; 
40	 
41	ignoreEvent = function (ev) { 
42	    if (ev && ev.preventDefault) { 
43	        ev.preventDefault(); 
44	        ev.stopPropagation(); 
45	    } else if (typeof(event) != 'undefined') { 
46	        event.cancelBubble = false; 
47	        event.returnValue = false; 
48	    } 
49	}; 
50	 
51	 
52	update(SortableManager.prototype, { 
53	 
54	    "initWithTable": function (table) { 
55	        /***
56	
57	            Initialize the SortableManager with a table object
58	        
59	        ***/ 
60	        // Ensure that it's a DOM element 
61	        table = getElement(table); 
62	        // Find the thead 
63	        this.thead = table.getElementsByTagName('thead')[0]; 
64	        // get the mochi:format key and contents for each column header 
65	        var cols = this.thead.getElementsByTagName('th'); 
66	        for (var i = 0; i < cols.length; i++) { 
67	            var node = cols[i]; 
68	            var attr = null; 
69	            try { 
70	                attr = node.getAttribute("mochi:format"); 
71	            } catch (err) { 
72	                // pass 
73	            } 
74	            var o = node.childNodes; 
75	            this.columns.push({ 
76	                "format": attr, 
77	                "element": node, 
78	                "proto": node.cloneNode(true) 
79	            }); 
80	        } 
81	        // scrape the tbody for data 
82	        this.tbody = table.getElementsByTagName('tbody')[0]; 
83	        // every row 
84	        var rows = this.tbody.getElementsByTagName('tr'); 
85	        for (var i = 0; i < rows.length; i++) { 
86	            // every cell 
87	            var row = rows[i]; 
88	            var cols = row.getElementsByTagName('td'); 
89	            var rowData = []; 
90	            for (var j = 0; j < cols.length; j++) { 
91	                // scrape the text and build the appropriate object out of it 
92	                var cell = cols[j]; 
93	                var obj = scrapeText(cell); 
94	                switch (this.columns[j].format) { 
95	                    case 'isodate': 
96	                        obj = isoDate(obj); 
97	                        break; 
98	                    case 'str': 
99	                        break; 
100	                    case 'istr': 
101	                        obj = obj.toLowerCase(); 
102	                        break; 
103	                    // cases for numbers, etc. could be here 
104	                    default: 
105	                        break; 
106	                } 
107	                rowData.push(obj); 
108	            } 
109	            // stow away a reference to the TR and save it 
110	            rowData.row = row.cloneNode(true); 
111	            this.rows.push(rowData); 
112	 
113	        } 
114	 
115	        // do initial sort on first column 
116	        this.drawSortedRows(this.sortkey, true, false); 
117	 
118	    }, 
119	 
120	    "onSortClick": function (name) { 
121	        /***
122	
123	            Return a sort function for click events
124	
125	        ***/ 
126	        return method(this, function () { 
127	            log('onSortClick', name); 
128	            var order = this.sortState[name]; 
129	            if (order == null) { 
130	                order = true; 
131	            } else if (name == this.sortkey) { 
132	                order = !order; 
133	            } 
134	            this.drawSortedRows(name, order, true); 
135	        }); 
136	    }, 
137	 
138	    "drawSortedRows": function (key, forward, clicked) { 
139	        /***
140	
141	            Draw the new sorted table body, and modify the column headers
142	            if appropriate
143	
144	        ***/ 
145	        log('drawSortedRows', key, forward); 
146	        this.sortkey = key; 
147	        // sort based on the state given (forward or reverse) 
148	        var cmp = (forward ? keyComparator : reverseKeyComparator); 
149	        this.rows.sort(cmp(key)); 
150	        // save it so we can flip next time 
151	        this.sortState[key] = forward; 
152	        // get every "row" element from this.rows and make a new tbody 
153	        var newBody = TBODY(null, map(itemgetter("row"), this.rows)); 
154	        // swap in the new tbody 
155	        this.tbody = swapDOM(this.tbody, newBody); 
156	        for (var i = 0; i < this.columns.length; i++) { 
157	            var col = this.columns[i]; 
158	            var node = col.proto.cloneNode(true); 
159	            // remove the existing events to minimize IE leaks 
160	            col.element.onclick = null; 
161	            col.element.onmousedown = null; 
162	            col.element.onmouseover = null; 
163	            col.element.onmouseout = null; 
164	            // set new events for the new node 
165	            node.onclick = this.onSortClick(i); 
166	            node.onmousedown = ignoreEvent; 
167	            node.onmouseover = mouseOverFunc; 
168	            node.onmouseout = mouseOutFunc; 
169	            // if this is the sorted column 
170	            if (key == i) { 
171	                // \u2193 is down arrow, \u2191 is up arrow 
172	                // forward sorts mean the rows get bigger going down 
173	                var arrow = (forward ? "\u2193" : "\u2191"); 
174	                // add the character to the column header 
175	                node.appendChild(SPAN(null, arrow)); 
176	                if (clicked) { 
177	                    node.onmouseover(); 
178	                } 
179	            } 
180	  
181	            // swap in the new th 
182	            col.element = swapDOM(col.element, node); 
183	        } 
184	    } 
185	}); 
186	 
187	sortableManager = new SortableManager(); 
188	 
189	addLoadEvent(function () { 
190	    sortableManager.initWithTable('sortable_table'); 
191	}); 
192	 
193	// rewrite the view-source links 
194	addLoadEvent(function () { 
195	    var elems = getElementsByTagAndClassName("A", "view-source"); 
196	    var page = "sortable_tables/"; 
197	    for (var i = 0; i < elems.length; i++) { 
198	        var elem = elems[i]; 
199	        var href = elem.href.split(/\//).pop(); 
200	        elem.target = "_blank"; 
201	        elem.href = "../view-source/view-source.html#" + page + href; 
202	    } 
203	}); 