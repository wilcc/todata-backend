/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(obj) {
  return obj.text
}
const getPriority = function(obj) {
  return obj.priority
}
const isComplete = function(obj) {
  return obj.complete
}
const isHighPriority = function(obj) {
  return obj.priority > 1
}
const ishigh = function(obj) {
  if (obj.priority > 1){
    return 'High'
  } else return 'Low'
}
const nameAndPriority = function(obj){
  return getTodoName(obj) + ' - ' + ishigh(obj)
}
const isNotComplete = function(obj){
  return !obj.complete
}
const notHighPriorities = function(obj) {
  return obj.priority < 2
}
/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(array) {
  return array.map(getTodoName)
}
const priorities = function(array) {
  return array.map(getPriority)
}
const namesAndPriorities = function(array) {
  return array.map(nameAndPriority)
}
const justNotComplete = function(array) {
  return array.filter(isNotComplete)

}
const justComplete = function(array) {
  return array.filter(isComplete)
}
const priority2Only = function(array) {
  return array.filter(isHighPriority)
}
const priority1Only = function(array) {
  return array.filter(notHighPriorities)
}


module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
