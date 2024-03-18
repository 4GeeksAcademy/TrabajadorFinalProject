"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask import jsonify
# from flask_jwt_extended import get_jwt_identity
# from flask_jwt_extended import jwt_required

# Create flask app
api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


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
            "name": "Gladys West",
            "service1": "Web & Mobile App Development",
            "service2": "Data Analysis and Visualization",
            "short_description": "Web & Mobile App Development and Data Analysis and Visualization expert with 37 years of experience",
            "long_description": "I am known for my contributions to the mathematical modeling of the Earth's shape, which led to the development of GPS. I was inducted into the United States Air Force Hall of Fame in 2018.",
            "reviews": 63,
            "top_rated": True,
            "price": "$50 to $99",
            "delivery_time": "3 Days",
            "years_of_experience": 13,
            "image": "Gladys_West.png"
        },
        {
            "id": 2,
            "name": "Rediet Abebe",
            "service1": "Software Development",
            "service2": "Database Management",
            "short_description": "Software Development and Database Management expert with 10 years of experience",
            "long_description": "As a computer scientist from Ethiopia, I co-founded Black in AI, a community of black researchers in artificial intelligence. My work is dedicated to developing algorithms and AI for social good.",
            "reviews": 91,
            "top_rated": False,
            "price": "$25 to $49",
            "delivery_time": "1 Week",
            "years_of_experience": 39,
            "image": "Rediet_Abebe.png"
        },
        {
            "id": 3,
            "name": "Marian Croak",
            "service1": "Ethical Hacking Services",
            "service2": "Cybersecurity Services",
            "short_description": "Ethical Hacking Services and Cybersecurity Services expert with 8 years of experience",
            "long_description": "I am a pioneering inventor in the field of VoIP with over 200 patents. Currently, I serve as a Vice President at Google, overseeing engineering.",
            "reviews": 77,
            "top_rated": False,
            "price": "$25 to $49",
            "delivery_time": "3 Days",
            "years_of_experience": 26,
            "image": "Marian_Croak.png"
        },
        {
            "id": 4,
            "name": "Shafi Goldwasser",
            "service1": "Data Analysis and Visualization",
            "service2": "Database Management",
            "short_description": "Data Analysis and Visualization and Database Management expert with 17 years of experience",
            "long_description": "My work in cryptography, computational complexity theory, and number theory has been recognized globally, earning me the Turing Award.",
            "reviews": 47,
            "top_rated": False,
            "price": "$25 to $49",
            "delivery_time": "1 Week",
            "years_of_experience": 21,
            "image": "Shafi_Goldwasser.png"
        },
        {
            "id": 5,
            "name": "Annie Easley",
            "service1": "Cybersecurity Services",
            "service2": "Game Development",
            "short_description": "Cybersecurity Services and Game Development expert with 34 years of experience",
            "long_description": "I was a computer scientist, mathematician, and rocket scientist, one of the first African-Americans to work as a computer scientist at NASA, contributing significantly to the space program.",
            "reviews": 84,
            "top_rated": True,
            "price": "$100+",
            "delivery_time": "24 Hours",
            "years_of_experience": 13,
            "image": "Annie_Easley.png"
        },
        {
            "id": 6,
            "name": "Katherine Johnson",
            "service1": "Database Management",
            "service2": "Software Development",
            "short_description": "Database Management and Software Development expert with 5 years of experience",
            "long_description": "My calculations of orbital mechanics were crucial to the success of the first and subsequent U.S. manned spaceflights. In 2015, I was awarded the Presidential Medal of Freedom.",
            "reviews": 80,
            "top_rated": True,
            "price": "$100+",
            "delivery_time": "3 Days",
            "years_of_experience": 36,
            "image": "Katherine_Johnson.png"
        },
        {
            "id": 7,
            "name": "Parisa Tabriz",
            "service1": "Database Management",
            "service2": "API Development and Integration",
            "short_description": "Database Management and API Development and Integration expert with 35 years of experience",
            "long_description": "I've been dubbed 'Google's Security Princess' for my role in managing Google's Chrome security engineering team, advocating for cybersecurity and safer internet use.",
            "reviews": 96,
            "top_rated": True,
            "price": "$25 to $49",
            "delivery_time": "3 Days",
            "years_of_experience": 23,
            "image": "Parisa_Tabriz.png"
        },
        {
            "id": 8,
            "name": "Radia Perlman",
            "service1": "Data Analysis and Visualization",
            "service2": "API Development and Integration",
            "short_description": "Data Analysis and Visualization and API Development and Integration expert with 3 years of experience",
            "long_description": "Often called the 'mother of the internet,' I invented the Spanning Tree Protocol (STP), which is essential for network bridges, and hold over 100 issued patents.",
            "reviews": 42,
            "top_rated": True,
            "price": "$50 to $99",
            "delivery_time": "3 Days",
            "years_of_experience": 12,
            "image": "Radia_Perlman.png"
        },
        {
            "id": 9,
            "name": "Anita Borg",
            "service1": "Data Analysis and Visualization",
            "service2": "Machine Learning and AI Development",
            "short_description": "Data Analysis and Visualization and Machine Learning and AI Development expert with 19 years of experience",
            "long_description": "I was a computer scientist who worked tirelessly to advocate for women in technology, founding the Institute for Women and Technology and the Grace Hopper Celebration of Women in Computing.",
            "reviews": 83,
            "top_rated": True,
            "price": "$25 to $49",
            "delivery_time": "3 Days",
            "years_of_experience": 7,
            "image": "Anita_Borg.png"
        },
        {
            "id": 10,
            "name": "Janese Swanson",
            "service1": "Database Management",
            "service2": "Game Development",
            "short_description": "Database Management and Game Development expert with 39 years of experience",
            "long_description": "I am known for my innovations in educational software and games for children, especially girls, founding Girl Tech to produce technology products designed for them.",
            "reviews": 87,
            "top_rated": True,
            "price": "$50 to $99",
            "delivery_time": "3 Days",
            "years_of_experience": 32,
            "image": "Janese_Swanson.png"
        },
        {
            "id": 11,
            "name": "Carol Shaw",
            "service1": "Machine Learning and AI Development",
            "service2": "Unethical Hacking Services",
            "short_description": "Machine Learning and AI Development and Unethical Hacking Services expert with 37 years of experience",
            "long_description": "Recognized as one of the first female game designers and programmers, I am best known for my work on River Raid.",
            "reviews": 75,
            "top_rated": False,
            "price": "$50 to $99",
            "delivery_time": "3 Days",
            "years_of_experience": 26,
            "image": "Carol_Shaw.png"
        },
        {
            "id": 12,
            "name": "Evelyn Boyd Granville",
            "service1": "Web & Mobile App Development",
            "service2": "Ethical Hacking Services",
            "short_description": "Web & Mobile App Development and Ethical Hacking Services expert with 12 years of experience",
            "long_description": "I was one of the first African-American women to earn a Ph.D. in mathematics, working on satellite orbit calculations and computer software development at IBM.",
            "reviews": 83,
            "top_rated": False,
            "price": "$100+",
            "delivery_time": "24 Hours",
            "years_of_experience": 12,
            "image": "Evelyn_Boyd_Granville.png"
        },
        {
            "id": 13,
            "name": "Joan Clarke",
            "service1": "Machine Learning and AI Development",
            "service2": "Cybersecurity Services",
            "short_description": "Machine Learning and AI Development and Cybersecurity Services expert with 8 years of experience",
            "long_description": "As a British cryptanalyst and mathematician, I played a crucial role in deciphering the Enigma code during World War II, working closely with Alan Turing.",
            "reviews": 49,
            "top_rated": True,
            "price": "$100+",
            "delivery_time": "3 Days",
            "years_of_experience": 16,
            "image": "Joan_Clarke.png"
        },
        {
            "id": 14,
            "name": "Barbara Liskov",
            "service1": "Software Development",
            "service2": "Cybersecurity Services",
            "short_description": "Software Development and Cybersecurity Services expert with 8 years of experience",
            "long_description": "My contributions to programming languages, programming methodology, and distributed systems have been recognized with the Turing Award.",
            "reviews": 83,
            "top_rated": False,
            "price": "$50 to $99",
            "delivery_time": "24 Hours",
            "years_of_experience": 11,
            "image": "Barbara_Liskov.png"
        },
        {
            "id": 15,
            "name": "Frances Elizabeth Allen",
            "service1": "Game Development",
            "service2": "Software Development",
            "short_description": "Game Development and Software Development expert with 13 years of experience",
            "long_description": "I was a pioneer in optimizing compilers, becoming the first woman to receive the Turing Award for my contributions to computer science.",
            "reviews": 97,
            "top_rated": False,
            "price": "$100+",
            "delivery_time": "3 Days",
            "years_of_experience": 16,
            "image": "Frances_Elizabeth_Allen.png"
        },
        {
            "id": 16,
            "name": "Mark Dean",
            "service1": "Web & Mobile App Development",
            "service2": "API Development and Integration",
            "short_description": "Web & Mobile App Development and API Development and Integration expert with 5 years of experience",
            "long_description": "I hold three of IBM’s original nine PC patents and played a significant role in the development of the personal computer.",
            "reviews": 32,
            "top_rated": False,
            "price": "$50 to $99",
            "delivery_time": "3 Days",
            "years_of_experience": 8,
            "image": "Mark_Dean.png"
        },
        {
            "id": 17,
            "name": "Larry Page",
            "service1": "API Development and Integration",
            "service2": "Game Development",
            "short_description": "API Development and Integration and Game Development expert with 9 years of experience",
            "long_description": "I co-founded Google with Sergey Brin and invented Google's PageRank algorithm, which became the foundation of the company's search engine.",
            "reviews": 72,
            "top_rated": False,
            "price": "$25 to $49",
            "delivery_time": "1 Week",
            "years_of_experience": 40,
            "image": "Larry_Page.png"
        },
        {
            "id": 18,
            "name": "Steve Jobs",
            "service1": "Cybersecurity Services",
            "service2": "API Development and Integration",
            "short_description": "Cybersecurity Services and API Development and Integration expert with 30 years of experience",
            "long_description": "I co-founded Apple Inc., leading the creation of innovative products like the iPod, iPhone, and iPad.",
            "reviews": 89,
            "top_rated": True,
            "price": "$50 to $99",
            "delivery_time": "3 Days",
            "years_of_experience": 3,
            "image": "Steve_Jobs.png"
        },
        {
            "id": 19,
            "name": "Bill Gates",
            "service1": "Ethical Hacking Services",
            "service2": "Unethical Hacking Services",
            "short_description": "Ethical Hacking Services and Unethical Hacking Services expert with 15 years of experience",
            "long_description": "I co-founded Microsoft Corporation, contributing to the personal computer revolution with software like MS-DOS and Windows.",
            "reviews": 23,
            "top_rated": False,
            "price": "$25 to $49",
            "delivery_time": "3 Days",
            "years_of_experience": 29,
            "image": "Bill_Gates.png"
        },
        {
            "id": 20,
            "name": "Tim Berners-Lee",
            "service1": "Unethical Hacking Services",
            "service2": "Ethical Hacking Services",
            "short_description": "Unethical Hacking Services and Ethical Hacking Services expert with 21 years of experience",
            "long_description": "I am credited with inventing the World Wide Web, making the internet accessible and usable for people worldwide.",
            "reviews": 75,
            "top_rated": False,
            "price": "$50 to $99",
            "delivery_time": "24 Hours",
            "years_of_experience": 24,
            "image": "Tim_Berners-Lee.png"
        },
        {
            "id": 21,
            "name": "Linus Torvalds",
            "service1": "Machine Learning and AI Development",
            "service2": "Game Development",
            "short_description": "Machine Learning and AI Development and Game Development expert with 28 years of experience",
            "long_description": "I created the Linux kernel, which serves as the foundation for many open-source operating systems today.",
            "reviews": 56,
            "top_rated": True,
            "price": "$50 to $99",
            "delivery_time": "3 Days",
            "years_of_experience": 29,
            "image": "Linus_Torvalds.png"
        },
        {
            "id": 22,
            "name": "Guido van Rossum",
            "service1": "Cybersecurity Services",
            "service2": "API Development and Integration",
            "short_description": "Cybersecurity Services and API Development and Integration expert with 12 years of experience",
            "long_description": "I am the creator of the Python programming language, aiming to make programming more enjoyable and accessible.",
            "reviews": 31,
            "top_rated": False,
            "price": "$50 to $99",
            "delivery_time": "1 Week",
            "years_of_experience": 18,
            "image": "Guido_van_Rossum.png"
        },
        {
            "id": 23,
            "name": "James Gosling",
            "service1": "Web & Mobile App Development",
            "service2": "Machine Learning and AI Development",
            "short_description": "Web & Mobile App Development and Machine Learning and AI Development expert with 22 years of experience",
            "long_description": "Known as the father of the Java programming language, I've significantly impacted software development.",
            "reviews": 37,
            "top_rated": True,
            "price": "$25 to $49",
            "delivery_time": "24 Hours",
            "years_of_experience": 35,
            "image": "James_Gosling.png"
        },
        {
            "id": 24,
            "name": "Bjarne Stroustrup",
            "service1": "Cybersecurity Services",
            "service2": "Web & Mobile App Development",
            "short_description": "Cybersecurity Services and Web & Mobile App Development expert with 37 years of experience",
            "long_description": "I invented C++, a programming language that has been foundational in the development of various software applications.",
            "reviews": 93,
            "top_rated": True,
            "price": "$25 to $49",
            "delivery_time": "3 Days",
            "years_of_experience": 34,
            "image": "Bjarne_Stroustrup.png"
        },
        {
            "id": 25,
            "name": "Kenneth Lane Thompson",
            "service1": "Software Development",
            "service2": "API Development and Integration",
            "short_description": "Software Development and API Development and Integration expert with 25 years of experience",
            "long_description": "My co-creation of the UNIX operating system and development of the Go programming language at Google are among my contributions to the field.",
            "reviews": 77,
            "top_rated": False,
            "price": "$100+",
            "delivery_time": "3 Days",
            "years_of_experience": 18,
            "image": "Kenneth_Lane_Thompson.png"
        },
        {
            "id": 26,
            "name": "Brian Wilson Kernighan",
            "service1": "Game Development",
            "service2": "API Development and Integration",
            "short_description": "Game Development and API Development and Integration expert with 6 years of experience",
            "long_description": "I co-authored 'The C Programming Language' and contributed significantly to UNIX development, aiming to influence the world of computing.",
            "reviews": 25,
            "top_rated": False,
            "price": "$25 to $49",
            "delivery_time": "3 Days",
            "years_of_experience": 30,
            "image": "Brian_Wilson_Kernighan.png"
        },
        {
            "id": 27,
            "name": "Dennis Ritchie",
            "service1": "Game Development",
            "service2": "Ethical Hacking Services",
            "short_description": "Game Development and Ethical Hacking Services expert with 22 years of experience",
            "long_description": "I am best known for creating the C programming language and for co-developing UNIX, two pillars of modern computing.",
            "reviews": 92,
            "top_rated": True,
            "price": "$50 to $99",
            "delivery_time": "24 Hours",
            "years_of_experience": 17,
            "image": "Dennis_Ritchie.png"
        },
        {
            "id": 28,
            "name": "Niklaus Wirth",
            "service1": "Game Development",
            "service2": "Ethical Hacking Services",
            "short_description": "Game Development and Ethical Hacking Services expert with 8 years of experience",
            "long_description": "I've designed several influential programming languages, including Pascal, Modula-2, and Oberon. My work aims to make software more reliable, efficient, and simpler to understand.",
            "reviews": 38,
            "top_rated": False,
            "price": "$25 to $49",
            "delivery_time": "3 Days",
            "years_of_experience": 30,
            "image": "Niklaus_Wirth.png"
        },
        {
            "id": 29,
            "name": "Philip Don Estridge",
            "service1": "Software Development",
            "service2": "Database Management",
            "short_description": "Software Development and Database Management expert with 32 years of experience",
            "long_description": "Known as the father of the IBM PC, my leadership in the development of the IBM Personal Computer (PC) significantly influenced personal computing.",
            "reviews": 57,
            "top_rated": True,
            "price": "$50 to $99",
            "delivery_time": "3 Days",
            "years_of_experience": 22,
            "image": "Philip_Don_Estridge.png"
        },
        {
            "id": 30,
            "name": "Alan Turing",
            "service1": "Web & Mobile App Development",
            "service2": "API Development and Integration",
            "short_description": "Web & Mobile App Development and API Development and Integration expert with 17 years of experience",
            "long_description": "I am considered the father of theoretical computer science and artificial intelligence. My work during World War II in cracking the Enigma code is one of my most notable achievements.",
            "reviews": 88,
            "top_rated": True,
            "price": "$25 to $49",
            "delivery_time": "24 Hours",
            "years_of_experience": 33,
            "image": "Alan_Turing.png"
        }
    ]
    return jsonify(vendors), 200