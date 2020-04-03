export default function (context) {
  for(let i=0; i<5; i++){
    alert(
      'Hey! I am Annoying middleware!' +
      'Count It: ' + i + '/ 5'
    )
  }
}
