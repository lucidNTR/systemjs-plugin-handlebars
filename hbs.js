/*
  Handlebars plugin
*/
import Handlebars from "handlebars"

exports.translate = function(load, b) {
  console.log([this, load, b])
  load.source = Handlebars.compile(load.source);
}