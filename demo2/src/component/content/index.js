import titleTmpl from './view/title.art';
import $ from 'jquery'
import 'jquery.nicescroll'
import icon_search from '../../assets/icon_search@2x.png'

import './index.less';

var content = {
  init: function () {
    $('.btn').click(function() {
      alert('我是按钮')
    })
    var data ={
      iconpath: icon_search
    }
    $('body').append(titleTmpl)
    $('.art').append(template('layer-job-title-tpl', data))
  },

}


export default content

