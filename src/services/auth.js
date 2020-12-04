var nome_ = 'teste';
var email_ = 'teste';

export function Signin(nomeReceived){
    const uri = 'http://192.168.1.105/Web/registror/selecao.php';

    select();

    async function select() {
        try {
            const resp = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    nomeReceived
                })
            })

            const json = await resp.json()

            nome_ = json[0].name;
            email_ = json[0].email;

        } catch (e) {
            console.log('erro...', e.message);
        }
    }

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ALeKk02G0qQyeFUIPxUx1xiaaCNsi_e2Yew',
                user: {
                    name: nome_,
                    email: email_ 
                }
            })
        }, 1000);
    })
}