var nodes = new vis.DataSet([
{ id:1, label: "Terminal Modificad00"},
{ id:2, label: "Zona Militar Modificad00"},
{ id:3, label: "Zona Militar 2"},
{ id:4, label: "Casa de Kerly"},
{ id:5, label: "Gasolinera Llave"},
{ id:6, label: "Pucara"},
{ id:7, label: "laguna daniel"},
{ id:8, label: "Madrina kerly"},
{ id:9, label: "ecu911"},
{ id:10, label: "zoologico"},

]);
var edges = new vis.DataSet([
{ from: 1, to: 2, label: "0.0"},
{ from: 1, to: 6, label: "17456.54"},
{ from: 2, to: 3, label: "17458.27"},
{ from: 2, to: 8, label: "17456.81"},
{ from: 3, to: 4, label: "2.74"},
{ from: 3, to: 8, label: "3.85"},
{ from: 4, to: 5, label: "1.45"},
{ from: 4, to: 6, label: "3.02"},
{ from: 5, to: 6, label: "1.95"},
{ from: 5, to: 4, label: "1.45"},
{ from: 6, to: 7, label: "2.13"},
{ from: 6, to: 9, label: "3.8"},
{ from: 7, to: 8, label: "1.0"},
{ from: 7, to: 5, label: "2.71"},
{ from: 8, to: 9, label: "4.68"},
{ from: 8, to: 4, label: "2.97"},
{ from: 9, to: 10, label: "2.08"},
{ from: 9, to: 6, label: "3.8"},
{ from: 10, to: 3, label: "2.95"},

]);
var container = document.getElementById("mynetwork");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {};
      var network = new vis.Network(container, data, options);