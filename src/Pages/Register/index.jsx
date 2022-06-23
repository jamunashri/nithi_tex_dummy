import React from 'react'
import { Header } from '../../Components'

const Register = () => {
return (
    <>
    <Header />
    <section class="register">

    <form action="">
        <h3>register now</h3>
        <input type="text" name="" placeholder="enter your name" id="" class="box" />
        <input type="email" name="" placeholder="enter your email" id="" class="box"/>
        <input type="password" name="" placeholder="enter your password" id="" class="box"/>
        <input type="password" name="" placeholder="re-enter your password" id="" class="box"/>
        <input type="submit" value="register now" class="btn"/>
        <p>already have an account?</p>
        <a href="/login" class="btn link">login now</a>
    </form>

</section>
</>
)
}
export default Register