Ext.define('EMSPEEDExt5.store.People', {
    extend: 'Ext.data.Store',
    requires: [
    'EMSPEEDExt5.model.Person'
    ],
    storeId : 'People',
    model   : 'EMSPEEDExt5.model.Person',
    
    data : [
        { 
            'name'  : 'Lisa',  
            'email' : 'lisa@simpsons.com',
            'phone' : '555-111-1224' 
        },
        { 
            'name'  : 'Bart',  
            'email' : 'bart@simpsons.com',
            'phone' : '555-222-1234'
        },
        { 
            'name'  : 'Homer', 
            'email' : 'homer@simpsons.com',
            'phone' : '555-222-1244'
        },
        { 
            'name'  : 'Marge', 
            'email' : 'marge@simpsons.com',
            'phone' : '555-222-1254'
        }
    ]

});