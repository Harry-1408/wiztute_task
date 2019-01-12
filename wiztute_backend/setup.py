import os
from setuptools import setup

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.rst')).read()

setup(
    name='django-faqs',
    version='0.1',
    packages=['wiztute_backend'],
    description='FAQs of a wiztute',
    long_description=README,
    author='Harsh Patel',
    author_email='harshpatel1048@gmail.com',
    url='https://github.com/harry-1408/',
    license='MIT',
    install_requires=[
        'Django>=1.6,<1.7',
    ]
)