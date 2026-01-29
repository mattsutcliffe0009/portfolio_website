from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/projects/ratbot")
def ratbot():
    return render_template("projects/ratbot.html")

@app.route("/projects/distortion-pedal")
def distortion_pedal():
    return render_template("projects/distortion_pedal.html")

@app.route("/projects/self-hosted-website")
def website():
    return render_template("projects/website.html")

if __name__ == "__main__":
    app.run(debug=True) 


