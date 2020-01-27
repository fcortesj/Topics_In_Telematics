from flask_restful import Resource, reqparse
from resources.imports import mongo
from flask import abort


class Manage_Inputs(Resource):
    """ Class implemented to manage inputs (User (username, email), temperature, moisture, GPS data - longitude and latitude)"""

    def post(self):
        """
            Adds new input to the database
        """

        # First we create the parser and then we add the input fields
        input_parser = reqparse.RequestParser()
        input_parser.add_argument('username')
        input_parser.add_argument('email')
        input_parser.add_argument('temperature')
        input_parser.add_argument('moisture')
        input_parser.add_argument('longitude')
        input_parser.add_argument('latitude')

        # We parse the arguments
        args = input_parser.parse_args()

        # Then we create the input to push into the database
        signed_input = {
            "username"    : str(args['username']),
            "email"       : str(args['email']),
            "temperature" : str(args['temperature']),
            "moisture"    : str(args['moisture']),
            "longitude"   : str(args['longitude']),
            "latitude"    : str(args['latitude'])
        }

        description = mongo.db.inputs
        description.insert(signed_input)

        #Input succeded!
        return 200
    
    def get(self):
        """
            Returns all data form the db
        """

        # First we create the cursor and the list where all inputs will be 
        all_inputs = mongo.db.inputs.find()
        input_list = []

        # Lets iterate through all elements
        for _ in range(all_inputs.count()):
            current_input = all_inputs.next()
            # Extract current input fields
            input_to_return = {
                                "id" : str(current_input["_id"]),
                                "username" : str(current_input["username"]),
                                "email"    : str(current_input["email"]),
                                "temperature" : str(current_input["temperature"]),
                                "moisture"    : str(current_input["moisture"]),
                                "longitude"   : str(current_input["longitude"]),
                                "latitude"    : str(current_input["latitude"])
            }
            input_list.append(input_to_return)
        
        # Return list with all inputs
        return input_list
