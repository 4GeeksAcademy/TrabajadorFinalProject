"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/vendors", methods=["GET"])
def get_ph_vendors():
    vendors = [
        {
            "id": 1,
            "service": "Web & Mobile App Development, Software Development",
            "name": "Leyla",
            "description": "Web & Mobile App Development and Software Development expert with 5 years of experience.",
            "reviews": 60,
            "price": "$50 to $99",
            "delivery_time": "3 Days",
            "top_rated": False,
            "gender": "female",
            "years_of_experience": 5
        },
        {
            "id": 2,
            "service": "Data Analysis and Visualization, Machine Learning and AI Development",
            "name": "Elijah",
            "description": "Data Analysis and Visualization and Machine Learning and AI Development expert with 17 years of experience.",
            "reviews": 14,
            "price": "$100+",
            "delivery_time": "1 Week",
            "top_rated": False,
            "gender": "male",
            "years_of_experience": 17
        },
        {
            "id": 3,
            "service": "Database Management, API Development and Integration",
            "name": "Joseph",
            "description": "Database Management and API Development and Integration expert with 17 years of experience.",
            "reviews": 60,
            "price": "$100+",
            "delivery_time": "1 Week",
            "top_rated": True,
            "gender": "male",
            "years_of_experience": 17
        },
        {
            "id": 4,
            "service": "Cybersecurity Services, Game Development",
            "name": "Yara",
            "description": "Cybersecurity Services and Game Development expert with 16 years of experience.",
            "reviews": 16,
            "price": "$100+",
            "delivery_time": "3 Days",
            "top_rated": False,
            "gender": "female",
            "years_of_experience": 16
        },
        {
            "id": 5,
            "service": "Ethical Hacking Services, Unethical Hacking Services",
            "name": "Thomas",
            "description": "Ethical Hacking Services and Unethical Hacking Services expert with 15 years of experience.",
            "reviews": 3,
            "price": "$100+",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": False,
            "gender": "male",
            "years_of_experience": 15
        },
        {
            "id": 6,
            "service": "Software Development, Data Analysis and Visualization",
            "name": "Susan",
            "description": "Software Development and Data Analysis and Visualization expert with 9 years of experience.",
            "reviews": 54,
            "price": "$99 to $100",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": False,
            "gender": "female",
            "years_of_experience": 9
        },
        {
            "id": 7,
            "service": "Machine Learning and AI Development, Database Management",
            "name": "Lucas",
            "description": "Machine Learning and AI Development and Database Management expert with 18 years of experience.",
            "reviews": 55,
            "price": "$50 to $99",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": False,
            "gender": "male",
            "years_of_experience": 18
        },
        {
            "id": 8,
            "service": "API Development and Integration, Cybersecurity Services",
            "name": "Amelia",
            "description": "API Development and Integration and Cybersecurity Services expert with 9 years of experience.",
            "reviews": 78,
            "price": "$20 to $49",
            "delivery_time": "3 Days",
            "top_rated": False,
            "gender": "female",
            "years_of_experience": 9
        },
        {
            "id": 9,
            "service": "Game Development, Ethical Hacking Services",
            "name": "Mia",
            "description": "Game Development and Ethical Hacking Services expert with 15 years of experience.",
            "reviews": 50,
            "price": "$99 to $100",
            "delivery_time": "1 Week",
            "top_rated": True,
            "gender": "female",
            "years_of_experience": 15
        },
        {
            "id": 10,
            "service": "Unethical Hacking Services, Web & Mobile App Development",
            "name": "Jessica",
            "description": "Unethical Hacking Services and Web & Mobile App Development expert with 15 years of experience.",
            "reviews": 40,
            "price": "$50 to $99",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": False,
            "gender": "female",
            "years_of_experience": 15
        },
        {
            "id": 11,
            "service": "Data Analysis and Visualization, API Development and Integration",
            "name": "Santiago",
            "description": "Data Analysis and Visualization and API Development and Integration expert with 14 years of experience.",
            "reviews": 85,
            "price": "$20 to $49",
            "delivery_time": "3 Days",
            "top_rated": False,
            "gender": "male",
            "years_of_experience": 14
        },
        {
            "id": 12,
            "service": "Machine Learning and AI Development, Cybersecurity Services",
            "name": "Barbara",
            "description": "Machine Learning and AI Development and Cybersecurity Services expert with 4 years of experience.",
            "reviews": 39,
            "price": "$99 to $100",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": False,
            "gender": "female",
            "years_of_experience": 4
        },
        {
            "id": 13,
            "service": "Database Management, Game Development",
            "name": "David",
            "description": "Database Management and Game Development expert with 2 years of experience.",
            "reviews": 11,
            "price": "$50 to $99",
            "delivery_time": "1 Week",
            "top_rated": False,
            "gender": "male",
            "years_of_experience": 2
        },
        {
            "id": 14,
            "service": "Software Development, Ethical Hacking Services",
            "name": "Theo",
            "description": "Software Development and Ethical Hacking Services expert with 16 years of experience.",
            "reviews": 86,
            "price": "$50 to $99",
            "delivery_time": "1 Week",
            "top_rated": True,
            "gender": "female",
            "years_of_experience": 16
        },
        {
            "id": 15,
            "service": "Web & Mobile App Development, Unethical Hacking Services",
            "name": "Jennifer",
            "description": "Web & Mobile App Development and Unethical Hacking Services expert with 10 years of experience.",
            "reviews": 7,
            "price": "$20 to $49",
            "delivery_time": "3 Days",
            "top_rated": True,
            "gender": "female",
            "years_of_experience": 10
        },
        {
            "id": 16,
            "service": "API Development and Integration, Machine Learning and AI Development",
            "name": "Evelyn",
            "description": "API Development and Integration and Machine Learning and AI Development expert with 20 years of experience.",
            "reviews": 23,
            "price": "$100+",
            "delivery_time": "1 Week",
            "top_rated": True,
            "gender": "female",
            "years_of_experience": 20
        },
        {
            "id": 17,
            "service": "Cybersecurity Services, Database Management",
            "name": "Bukayo",
            "description": "Cybersecurity Services and Database Management expert with 14 years of experience.",
            "reviews": 1,
            "price": "$50 to $99",
            "delivery_time": "3 Days",
            "top_rated": False,
            "image": "EthicalHackingServices.png",
            "gender": "male",
            "years_of_experience": 14
        },
        {
            "id": 18,
            "service": "Game Development, Software Development",
            "name": "Kayla",
            "description": "Game Development and Software Development expert with 3 years of experience.",
            "reviews": 90,
            "price": "$99 to $100",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": False,
            "gender": "female",
            "years_of_experience": 3
        },
        {
            "id": 19,
            "service": "Ethical Hacking Services, Data Analysis and Visualization",
            "name": "Harper",
            "description": "Ethical Hacking Services and Data Analysis and Visualization expert with 16 years of experience.",
            "reviews": 63,
            "price": "$100+",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": True,
            "gender": "female",
            "years_of_experience": 16
        },
        {
            "id": 20,
            "service": "Unethical Hacking Services, API Development and Integration",
            "name": "Emile",
            "description": "Unethical Hacking Services and API Development and Integration expert with 10 years of experience.",
            "reviews": 60,
            "price": "$20 to $49",
            "delivery_time": "3 Days",
            "top_rated": True,
            "gender": "male",
            "years_of_experience": 10
        },
        {
            "id": 21,
            "service": "Web & Mobile App Development, Cybersecurity Services",
            "name": "Declan",
            "description": "Web & Mobile App Development and Cybersecurity Services expert with 4 years of experience.",
            "reviews": 44,
            "price": "$100+",
            "delivery_time": "3 Days",
            "top_rated": True,
            "gender": "male",
            "state": "Georgia",
            "years_of_experience": 4
        },
        {
            "id": 22,
            "service": "Software Development, Game Development",
            "name": "Sakura",
            "description": "Software Development and Game Development expert with 20 years of experience.",
            "reviews": 73,
            "price": "$50 to $99",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": True,
            "gender": "female",
            "state": "Georgia",
            "years_of_experience": 20
        },
        {
            "id": 23,
            "service": "Data Analysis and Visualization, Ethical Hacking Services",
            "name": "Ava",
            "description": "Data Analysis and Visualization and Ethical Hacking Services expert with 7 years of experience.",
            "reviews": 37,
            "price": "$20 to $49",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": True,
            "gender": "female",
            "state": "Georgia",
            "years_of_experience": 7
        },
        {
            "id": 24,
            "service": "Machine Learning and AI Development, Unethical Hacking Services",
            "name": "Charlotte",
            "description": "Machine Learning and AI Development and Unethical Hacking Services expert with 1 years of experience.",
            "reviews": 41,
            "price": "$99 to $100",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": False,
            "gender": "female",
            "state": "Florida",
            "years_of_experience": 1
        },
        {
            "id": 25,
            "service": "Database Management, Web & Mobile App Development",
            "name": "William",
            "description": "Database Management and Web & Mobile App Development expert with 19 years of experience.",
            "reviews": 85,
            "price": "$100+",
            "delivery_time": "1 Week",
            "top_rated": False,
            "gender": "male",
            "state": "California",
            "years_of_experience": 19
        },
        {
            "id": 26,
            "service": "API Development and Integration, Software Development",
            "name": "Muhammad",
            "description": "API Development and Integration and Software Development expert with 16 years of experience.",
            "reviews": 51,
            "price": "$20 to $49",
            "delivery_time": "3 Days",
            "top_rated": False,
            "gender": "male",
            "state": "California",
            "years_of_experience": 16
        },
        {
            "id": 27,
            "service": "Cybersecurity Services, Data Analysis and Visualization",
            "name": "Oliver",
            "description": "Cybersecurity Services and Data Analysis and Visualization expert with 3 years of experience.",
            "reviews": 34,
            "price": "$20 to $49",
            "delivery_time": "1 Week",
            "top_rated": True,
            "gender": "male",
            "state": "California",
            "years_of_experience": 3
        },
        {
            "id": 28,
            "service": "Game Development, Machine Learning and AI Development",
            "name": "Maya",
            "description": "Game Development and Machine Learning and AI Development expert with 13 years of experience.",
            "reviews": 34,
            "price": "$100+",
            "delivery_time": "3 Days",
            "top_rated": True,
            "gender": "female",
            "state": "Georgia",
            "years_of_experience": 13
        },
        {
            "id": 29,
            "service": "Ethical Hacking Services, Database Management",
            "name": "Priya",
            "description": "Ethical Hacking Services and Database Management expert with 18 years of experience.",
            "reviews": 17,
            "price": "$20 to $49",
            "delivery_time": "1 Week",
            "top_rated": False,
            "gender": "female",
            "state": "California",
            "years_of_experience": 18
        },
        {
            "id": 30,
            "service": "Unethical Hacking Services, API Development and Integration",
            "name": "Jaxon",
            "description": "Unethical Hacking Services and API Development and Integration expert with 14 years of experience.",
            "reviews": 51,
            "price": "$20 to $49",
            "delivery_time": "3 Days",
            "top_rated": True,
            "gender": "male",
            "state": "California",
            "years_of_experience": 14
        },
        {
            "id": 31,
            "service": "Data Analysis and Visualization, Ethical Hacking Services",
            "name": "Tessa",
            "description": "Data Analysis and Visualization and Ethical Hacking Services expert with 5 years of experience.",
            "reviews": 35,
            "price": "$99 to $100",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": True,
            "gender": "female",
            "state": "Florida",
            "years_of_experience": 5
        },
        {
            "id": 32,
            "service": "Machine Learning and AI Development, Game Development",
            "name": "Omar",
            "description": "Machine Learning and AI Development and Game Development expert with 9 years of experience.",
            "reviews": 25,
            "price": "$99 to $100",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": False,
            "gender": "male",
            "state": "California",
            "years_of_experience": 9
        },
        {
            "id": 33,
            "service": "API Development and Integration, Unethical Hacking Services",
            "name": "Fatima",
            "description": "API Development and Integration and Unethical Hacking Services expert with 11 years of experience.",
            "reviews": 73,
            "price": "$99 to $100",
            "delivery_time": "ASAP (Within 24 Hours)",
            "top_rated": False,
            "gender": "female",
            "state": "Georgia",
            "years_of_experience": 11
        },
        {
            "id": 34,
            "service": "Cybersecurity Services, Web & Mobile App Development",
            "name": "Martin",
            "description": "Cybersecurity Services and Web & Mobile App Development expert with 18 years of experience.",
            "reviews": 53,
            "price": "$99 to $100",
            "delivery_time": "3 Days",
            "top_rated": True,
            "gender": "male",
            "state": "Florida",
            "years_of_experience": 18
        },
        {
            "id": 35,
            "service": "Database Management, Ethical Hacking Services",
            "name": "Kenji",
            "description": "Database Management and Ethical Hacking Services expert with 19 years of experience.",
            "reviews": 69,
            "price": "$20 to $49",
            "delivery_time": "1 Week",
            "top_rated": True,
            "gender": "female",
            "state": "Florida",
            "years_of_experience": 19
        }
    ]
    return jsonify(vendors), 200
