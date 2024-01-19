// let token = '3aeb5f2d96ad22671584937b6ed1531105fa82c8762b5143'

// export const server_call = {
//     get: async () => {
//         const response = await fetch(`https://myphonebook-b48u.onrender.com/api/contacts`,{
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-access-token': `Bearer ${token}`
//             }
//         });

//         if (!response.ok){
//             throw new Error('Failed to fetch data from server')
//         }

//         return await response.json()
//     },

//     create: async 






// my phonebook: https://myphonebook-b48u.onrender.com/






// export const server_call = {
//     get: async () => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`, 
//         {
//             method: 'GET',
//             // mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//             },
//         });

//         if (!response.ok){
//             throw new Error('Failed to fetch data from server')
//         }

//         return await response.json()
//     },

//     create: async (data: any = {}) => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
//         {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//             },
//             body: JSON.stringify(data)
//         })

//         if(!response.ok) {
//             throw new Error('Failed to create new data on the server')
//         }

//         return await response.json()
//     },

//     update: async (id:string, data: any = {}) => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/${id}`,
//         {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//             },
//             body: JSON.stringify(data)
//         })

//         if(!response.ok) {
//             throw new Error('Failed to update on server')
//         }

//         return await response.json()
//     },

//     delete: async (id:string) => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/${id}`,
//         {
//             method: "DELETE",
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         })

//         if(!response.ok) {
//             throw new Error('Failed to delete data on server')
//         }

//         return;
//     },
// }



// const token = '22c916bc1dc288552ea1ef5dcaf99fc7239403966f23cef2'

// export const server_calls = {
//     get: async () => { 
//         const response = await fetch('https://phone-book-app-kux7.onrender.com/api/contacts',
//         {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//                 'x-access-token': `Bearer ${token}`
//             }


//         });

//         if (!response.ok){
//             throw new Error('Failed to fetch data from the server')
//         }

//         return await response.json()
//     },

//     create: async (data: any = {}) => {
//         const response = await fetch(`https://phone-book-app-kux7.onrender.com/api/contacts`,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//                 'x-access-token': `Bearer ${token}`
//             },
//             body: JSON.stringify(data)

//         })

//         if (!response.ok) {
//             throw new Error('Failed to create new data on the server')
//         }

//         return await response.json()
//     },

//     update: async (id: string, data:any = {}) => {
//         const response = await fetch(`https://phone-book-app-kux7.onrender.com/api/contacts/${id}`,
//         {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//                 'x-access-token': `Bearer ${token}`
//             },
//             body: JSON.stringify(data)

//         })

//         if (!response.ok) {
//             throw new Error('Failed to update data on the server')
//         }

//         return await response.json()
//     },

//     delete: async (id: string) => {
//         const response = await fetch(`https://phone-book-app-kux7.onrender.com/api/contacts/${id}`,
//         {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//                 'x-access-token': `Bearer ${token}`
//             },

//         })

//         if (!response.ok) {
//             throw new Error('Failed to delete data from the server')
//         }

//         // return;
//     },
// }

const token = 'c595c89d2997cd95852ed7df2eeb70327a97d99488f7b330'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://hotline-bling.glitch.me/api/contacts/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}







