function canItBeSpelled(str1, str2){

    if(str1.length >= str2.length){
      return false
    }
    
    if(str1.length === 0 && str2.length !== 0){
      return true 
    }
    
    let arr1 = [] 
    let arr2 = []
    
    for(let i = 0 ; i < str1.length; i++){
        let subArray = []
        subArray.push(str1[i])
        if(str1[i+1] === str1[i]){
          subArray.push(str1[i])
          i++
        }
        arr1.push(subArray)
    }
    
    for(let i = 0 ; i < str2.length; i++){
        let subArray = []
        subArray.push(str2[i])
        if(str2[i+1] === str2[i]){
          subArray.push(str2[i])
          i++
        }
        arr2.push(subArray)
    }
    
      for(let i=0; i < arr1.length; i++){
        if(arr1[i].length < arr2[i].length){
          arr2[i].pop()
        }
      }
    
      for(let i =0; i < arr2.length; i++){
        if(!arr2[i].includes(arr1[i][0])){
          arr2.splice(i,1)
        }
      }
    
    if (arr1.toString() === arr2.toString()){
      return true
    } else {
      return false 
    }
      
}