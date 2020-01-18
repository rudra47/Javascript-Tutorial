
let hobby = {
    hobby1: 'Cartoon',
    cartoonList: ['Tom', 'Jerry', 'motu', 'Patlu'],

    func : function() {
        // this.cartoonList.map(function(value) {
        //     console.log(`${this.hobby1} name is ${value}`); //prinf undifined name is ....
        // })
        this.cartoonList.map((value) => {
            console.log(`${this.hobby1} name is ${value}`); //prinf Cartoon name is ....
        })
    }
}

hobby.func();