"""
This module contains the creation of an Api Key of length 32.

For the moment it is generated randomly but can be change in the future with some sensors
"""

import random
import string

def generate_key(length):
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(length))