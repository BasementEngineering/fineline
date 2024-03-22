from flask import Flask, render_template, request, session, redirect, url_for


app = Flask(__name__)
app.config["SECRET_KEY"] = "hhhhh"

StatisticValue = None
@app.route("/dataVisualization", methods=["POST", "GET"])
def data():
    return render_template("next.html")


@app.route("/", methods=["POST", "GET"])
def home():
    if request.method == "POST":
        
        id = request.form.get("button_id")
        if request == "Enviroment":
            StatisticValue = "Enviroment"
            print(request.method)

            return redirect(url_for("data")) 
            
    return render_template("first.html")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)