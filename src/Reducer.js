const is={
    name:"",
    users:[],
    age:"",
}
const reducer=(state, action)=>{
    switch(action.type)
    {
        case "add":const recd=[...state.users];
                    recd.push(action.payload);
                    return {...state,users:recd}
       

        case "edit": const recds=[...state.users];
                    recds.find(x=>x!=action.payload)
                    return {...state,users:recds};

         case "del": const r=[...state.users];
                    r.splice(action.payload,1);

                    // r.filter(pre=>pre.i!==action.payload)};
                    return {...state,users:r};

                                           
    }
}
export {is, reducer}