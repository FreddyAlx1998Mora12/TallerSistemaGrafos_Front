var nodes = new vis.DataSet([
{ id:1, label: "Brigada Militar"},
{ id:2, label: "Colegio La Salle"},
{ id:3, label: "Universidad Tecnica"},
{ id:4, label: "PRESTIGIOSA UNL"},
{ id:5, label: "Comando de la Policia"},
{ id:6, label: "Esteban Godoy"},
{ id:7, label: "Iglesia la Catedral"},
{ id:8, label: "Cementerio General"},
{ id:9, label: "facultad medicina"},
{ id:10, label: "Coliseo Ciudad de Loja"},

]);
var edges = new vis.DataSet([
{ from: 1, to: 2, label: "2.33"},
{ from: 1, to: 3, label: "0.99"},
{ from: 2, to: 3, label: "1.43"},
{ from: 2, to: 9, label: "1.39"},
{ from: 3, to: 4, label: "4.98"},
{ from: 4, to: 5, label: "2.55"},
{ from: 4, to: 7, label: "3.79"},
{ from: 5, to: 6, label: "1.93"},
{ from: 5, to: 2, label: "1.76"},
{ from: 6, to: 7, label: "3.38"},
{ from: 7, to: 8, label: "2.57"},
{ from: 7, to: 2, label: "0.6"},
{ from: 8, to: 9, label: "2.91"},
{ from: 8, to: 6, label: "0.81"},
{ from: 9, to: 10, label: "1.42"},
{ from: 10, to: 2, label: "1.24"},

]);
var container = document.getElementById("mynetwork");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {};
      var network = new vis.Network(container, data, options);