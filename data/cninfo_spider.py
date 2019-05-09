from selenium import webdriver
from time import sleep
from selenium.webdriver.common.keys import Keys
from pymongo import MongoClient


def isElementExist(browser, element):
    try:
        browser.find_element_by_css_selector(element)
        return True

    except:
        return False

code = '000002'
url_history = 'http://webapi.cninfo.com.cn/#/company'
browser = webdriver.Chrome()
browser.implicitly_wait(7)
browser.get(url_history)
browser.find_element_by_css_selector(
    'body > div.container-fluid > div.mainArea.row > div > div > div > div.cont-right.pull-right.content-right > div > '
    'div.content-title.basicinfo01 > div > span.right-sear.companySearchGroup > div.input-group.searchData > input'
).send_keys(code)
browser.find_element_by_css_selector(
    'body > div.container-fluid > div.mainArea.row > div > div > div > div.cont-right.pull-right.content-right > div > '
    'div.content-title.basicinfo01 > div > span.right-sear.companySearchGroup > div.input-group.searchData > span'
).click()
# browser.close()
