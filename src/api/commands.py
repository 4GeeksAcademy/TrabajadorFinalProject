
import click
from api.models import db, User, Vendor

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""


def setup_commands(app):
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users")  # name of our command
    @click.argument("count")  # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("pop-db")
    def pop_db():
        vendor_data = [
            {
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
                "name": "Carol Shaw",
                "service1": "Machine Learning and AI Development",
                "service2": "CMS System Management Services",
                "short_description": "Machine Learning and AI Development and CMS System Management Services expert with 37 years of experience",
                "long_description": "Recognized as one of the first female game designers and programmers, I am best known for my work on River Raid.",
                "reviews": 75,
                "top_rated": False,
                "price": "$50 to $99",
                "delivery_time": "3 Days",
                "years_of_experience": 26,
                "image": "Carol_Shaw.png"
            },
            {
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
                "name": "Bill Gates",
                "service1": "Ethical Hacking Services",
                "service2": "CMS System Management Services",
                "short_description": "Ethical Hacking Services and CMS System Management Services expert with 15 years of experience",
                "long_description": "I co-founded Microsoft Corporation, contributing to the personal computer revolution with software like MS-DOS and Windows.",
                "reviews": 23,
                "top_rated": False,
                "price": "$25 to $49",
                "delivery_time": "3 Days",
                "years_of_experience": 29,
                "image": "Bill_Gates.png"
            },
            {
                "name": "Tim Berners-Lee",
                "service1": "CMS System Management Services",
                "service2": "Ethical Hacking Services",
                "short_description": "CMS System Management Services and Ethical Hacking Services expert with 21 years of experience",
                "long_description": "I am credited with inventing the World Wide Web, making the internet accessible and usable for people worldwide.",
                "reviews": 75,
                "top_rated": False,
                "price": "$50 to $99",
                "delivery_time": "24 Hours",
                "years_of_experience": 24,
                "image": "Tim_Berners-Lee.png"
            },
            {
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

        for vendor_info in vendor_data:
            vendor = Vendor(**vendor_info)
            db.session.add(vendor)
        db.session.commit()

        # pipenv run flask pop-db
