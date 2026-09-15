from main import addmultiplenumbers, multiplymultiplenumbers, isiteven, isitaninteger

def test_addmultiplenumbers():
    assert addmultiplenumbers([5, 7, 9]) == 21

def test_multiplymultiplenumbers():
    assert multiplymultiplenumbers([4, 5, 6]) == 120

def test_isiteven_true():
    assert isiteven(6) == True

def test_isiteven_false_por_decimal():
    assert isiteven(-3.8) == False

def test_isitaninteger_true():
    assert isitaninteger(3) == True

def test_isitaninteger_false():
    assert isitaninteger(7.3) == False