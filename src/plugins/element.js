import Vue from 'vue'
import { 
  Button,
  Row,
  Col,
  Input,
  Card,
  InputNumber,
  Form,
  FormItem,
  Message
 } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang);

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.use(Card);
Vue.use(InputNumber);
Vue.use(Form);
Vue.use(FormItem);

Vue.prototype.$message = Message;

Vue.message = Message;
