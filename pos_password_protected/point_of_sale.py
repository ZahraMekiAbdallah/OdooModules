from openerp import api, models, fields

class pos_config(models.Model):
    _inherit = "pos.config"

    is_password_quantity = fields.Boolean('Quantity')
    password_quantity = fields.Char('Password')
    is_password_price = fields.Boolean('Price')
    password_price = fields.Char('Password')
    is_password_discount = fields.Boolean('Discount')
    password_discount = fields.Char('Password')
    is_password_backspace = fields.Boolean('Backspace')
    password_backspace = fields.Char('Password')
