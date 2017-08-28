const todos = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':
            if(state.noteText){
                var d = new Date(); 
                return {
                    noteText:'',
                    noteArray:[
                    ...state.noteArray, 
                    {   
                        'date':d.getFullYear()+"/" +(d.getMonth() + 1) + "/" + d.getDate(),
                        'note': this.state.noteText, 
                        'id':action.id
                    }
                    ]
                }
            }
        case 'REMOVE_TODO':
            var arr = state.noteArray;
            arr.splice(key, 1);
            return {
                noteText:'',
                noteArray:arr
            }
        default:
            return state;
    }
}

export default todos


/*
if(this.state.noteText){
      var d = new Date(); 
      this.state.noteArray.push({'date':d.getFullYear()+"/" +(d.getMonth() + 1) + "/" + d.getDate(), 'note': this.state.noteText});
      this.setState({noteArray: this.state.noteArray })
      this.setState({ noteText: ''}) 

      this.itemsRef.set(this.state.noteArray);
    }
*/