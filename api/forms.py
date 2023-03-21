from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField, MultipleFileField
from wtforms.validators import DataRequired

class HelloForm(FlaskForm):
    country = StringField("country", validators = [DataRequired()])
    farm = StringField("farm", validators=[DataRequired()])
    field = StringField("field", validators=[DataRequired()])
    submit = SubmitField("Enter")
