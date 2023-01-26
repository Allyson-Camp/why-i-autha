// Enter client Information
const SUPABASE_URL = 'https://ejeezbcksxazezxketdy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZWV6YmNrc3hhemV6eGtldGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODk2MjcsImV4cCI6MTk5MDA2NTYyN30.uPokWkEqMtvLPS0Xe9q-myZON-BEU1EAO4iq7-o0cEk';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    // const { data, error } = await supabase.auth.signUp({
    //     email: email,
    //     password: password,
    // });

    // if (error) console.error(error);
    // return data;

    const response = await client.auth.signUp({
        email: email,
        password: password,
    });
    if (error) console.error(error);
    return response.data;
}

export async function signInUser(email, password) {
    // const { data, error } = await client.auth.signInWithPassword({
    //     email: email,
    //     password: password,
    // });

    // if (error) console.error(error);
    // return data;

    const response = await client.auth.signInWithPassword ({
        email: email,
        password: password,
    });
    if (error) console.error(error);
    return response.data;
}

export async function checkAuth() {

}

export async function redirectIfLoggedIn() {}

export async function logout() {
    // const { error } = await client.auth.signOut();

    // if (error) console.error(error);
    // return error;

    const response = await client.auth.signOut();

    return response.data;

}
