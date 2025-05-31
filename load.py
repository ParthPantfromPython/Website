from flask import Flask, render_template # type: ignore

app = Flask(__name__, template_folder=".")

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
# To run this Flask application, save the code in a file named `load.py` and ensure you have Flask installed.