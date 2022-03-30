from flask import Flask, send_file, send_from_directory

app = Flask(__name__, static_folder="public", static_url_path="/")

@app.route("/")
def index():
  return send_file("./public/index.html")

# @app.route("/<path:name>")
# def other_files(name):
#   return send_from_directory("./public", name, as_attachment=True)
