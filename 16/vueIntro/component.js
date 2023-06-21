const app = Vue.createApp({
    data(){
        return{
            planets:[],
            productName: 'new TV',
            price:100,
            currency: 'USD',
            order:0,
            menuState:false,
            users:[
                {
                    name:'Bob',
                    age:30,
                    isAdmin:true
                },
                {
                    name:'Bob2',
                    age:45,
                    isAdmin:false
                },
                {
                    name:'Tom',
                    age:45,
                    isAdmin:true
                },
                {
                    name:'Eva2',
                    age:45,
                    isAdmin:false
                }
            ],
            link:"https://prog.academy/"
        }
    },
    methods:{
        orderFn(){
            this.order = this.order + 1;
        },
        toggleMenu(){
            this.menuState = !this.menuState;
        },
        adminMode(user){
            console.log(111);
            user.isAdmin = !user.isAdmin;
        }
    },
    computed:{
        justAdmin(){
            return this.users.filter((user)=>user.isAdmin);
        }
    }
});
app.mount('#app')