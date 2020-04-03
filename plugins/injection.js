import Vue from 'vue'

Vue.prototype.$injectedFunction = string => alert('I created Injection: ' + string)
