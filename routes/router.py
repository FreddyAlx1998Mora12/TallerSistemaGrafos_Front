from flask import Flask, json, flash,Blueprint, url_for, jsonify, make_response, request, render_template, redirect, abort
import requests
router = Blueprint('router', __name__)

@router.route('/')
def home():
    return render_template('index.html')


@router.route('/ruta')
def view_mapa_ruta():  
    r = requests.get("http://localhost:8080/myapp/ruta/list")
    data = r.json()
    return render_template('components/lineas_rutas/index_ruta.html', list=data["data"])
    # return render_template('components/lineas_rutas/index_ruta.html')


# @router.route('/ruta/lista')
# def list_rutas():  
#     r = requests.get("http://localhost:8080/myapp/ruta/list")
#     data = r.json()
#     return render_template('components/lineas_rutas/index_ruta.html', list=data["data"])

# Registrar ruta 
# @router.route('/ruta/registrar')
# def view_registrar_ruta():  
#     return render_template('fragmento/proyecto Censo/registro.html')


@router.route('/ruta/registro', methods=["POST"])
def registrar_ruta():
    headers = {'Content-type': 'application/json'}
    form = request.form
    data = {
        "descripcion": form["descripcion"],
        "lat": form["latitude"],
        "long": form["longitude"],

    }

    # print(json.dumps(data));

    r = requests.post("http://localhost:8080/myapp/ruta/save", data=json.dumps(data), headers=headers)
    dat = r.json()
    print(f"Status Code: {r.status_code}")
    print(f"Response Content: {r.text}")

    if r.status_code == 200:
        flash(str(dat["data"]), category='info')
    else:
        flash(str(dat["data"]), category='error')

    # return render_template('components/lineas_rutas/index_ruta.html')
    return redirect(url_for('router.view_mapa_ruta'))
    # redirect(url_for('router.view_mapa_ruta'))


@router.route('/ruta/delete/<int:id>', methods=["POST"])
def eliminar_ruta(id):
    # print("Index a eliminar", id)
    if request.method == 'POST':
        if request.form.get('_method') == 'DELETE':
            r = requests.delete(f"http://localhost:8080/ruta/delete/{id}")

            if r.status_code == 200:
                flash("Ruta eliminado exitosamente.", category='info')
            else:
                flash("No se pudo eliminar la ruta.", category='error')
    
    # return redirect(view_mapa_ruta)
    return redirect(url_for('router.view_mapa_ruta'))
