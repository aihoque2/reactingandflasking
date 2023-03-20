from flask_wtf import FlaskForm, Form
from wtforms import StringField, SubmitField, SelectField, MultipleFileField
from wtforms.validators import DataRequired

class HelloForm(FlaskForm):
    first_name = StringField("first name", validators = [DataRequired()])
    last_name = StringField("last_name", validators=[DataRequired()])
    submit = SubmitField("Enter")
    