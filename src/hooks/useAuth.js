import axios from "axios"

const useAuth = () => {


    const createUser = (data, navigate) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.post(url, data)
            .then(res => {

                console.log(res.data)
                navigate('/login')

            })

            .catch(err => console.log(err))
    }

    const loginUser = (data ,  navigate) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("Token", res.data.token)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            localStorage.removeItem("Token")
            })

    }
    


    return { createUser, loginUser }
}

export default useAuth