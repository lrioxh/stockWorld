from django.shortcuts import render

# Create your views here.

def index(requeat):
    return render(requeat, 'index.html')

def sh(requeat):
    return render(requeat, 'sh.html')

def sz(requeat):
    return render(requeat, 'sz.html')

def financial(requeat):
    return render(requeat, 'financial.html')

def cmbc(requeat):
    return render(requeat, 'cmbc.html')

def spdb(requeat):
    return render(requeat, 'spdb.html')


