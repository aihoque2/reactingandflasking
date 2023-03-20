from flask_wtf import Form
from wtforms import StringField, SubmitField, SelectField, MultipleFileField
from wtforms.validators import DataRequired

class HelloForm(Form):
    first_name = StringField("first_name", validators = [DataRequired()])
    last_name = StringField("last_name", validators=[DataRequired()])
    submit = SubmitField("Enter")
