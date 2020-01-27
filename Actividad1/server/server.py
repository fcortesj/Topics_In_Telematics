"""
Flask based server for back-ended purposes of the proyect.

It uses Flask library to behave like a rest api
"""
from resources.imports import app, api
from resources.manage_inputs import Manage_Inputs
from flask_cors import CORS

api.add_resource(Manage_Inputs, '/manage_inputs')

cors = CORS(app)

if __name__=="__main__":
    app.run(debug = True)

# Post something with curl -> curl http://localhost:5000/manage_inputs -X POST -d "username=fcortesj" -d "email=fcortesj@eafit.edu.co" -d "temperature=7C" -d "moisture=19" -d "longitude=345.23" -d "latitude=127.3"
# Get curl -> curl http://localhost:5000/manage_inputs -X GET