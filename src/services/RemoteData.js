export default class RemoteData {
  static url = "http://localhost/simplefony/";
  /**
   * L'effet global de cette méthode est d'envoyer une requête à un serveur distant, de vérifier si la requête a réussi, d'analyser la réponse au format JSON, de l'afficher dans la console  et de la renvoyer. Si une étape échoue, il affiche un message d'erreur.
   * 
   * @returns Promise<{}[]>
   */
  static loadVelosMobiles() {
    return fetch(RemoteData.url + "velosMobiles")
      .then((response) => {
        console.log(`response.status`, response.status);
        if (response.status === 200) {
          return response.json();
        } else throw new Error("Problème de serveur dans loadVelosMobiles. Statut de l'erreur : " + response.status)
      })
      .then((velosMobiles) => {
        console.log(`velosMobiles`, velosMobiles);
        return velosMobiles;
      })
  }
   static deleteVeloMobile(id) {
    return fetch(`${RemoteData.url}velosMobiles/${id}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
      })
      .then((response) => {
        console.log(`response.status`, response.status);
        if (response.status === 200) {
          return response.json();
        } else throw new Error("Problème de serveur dans deleteVeloMobile. Statut de l'erreur : " + response.status)
      })
      .then((veloMobile) => {
        console.log(`veloMobile supprimé : `, veloMobile);
        return veloMobile;
      })
  }
  static readAllUsers() {
    return fetch(RemoteData.url + "utilisateur/readAllUsers")
      .then((response) => {
        console.log(`response.status`, response.status);
        if (response.status === 200) {
          return response.json();
        } else throw new Error("Problème de serveur dans loadUsers. Statut de l'erreur : " + response.status)
      })
      .then((users) => {
        console.log(`users`, users);
        return users;
      })
  }

  static isLogged(email, mdp) {
    let userCredential={
      email:email,
      mdp:mdp
    }
    console.log(userCredential)
  return fetch(RemoteData.url + "auth/logedin",
      {
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(userCredential),
      })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } 
        // else throw new Error("Problème de serveur dans deleteVeloMobile. Statut de l'erreur : " + response.status)
      })
      // .then((veloMobile) => {
      //   console.log(`veloMobile supprimé : `, veloMobile);
      //   return veloMobile;
      // })
  }
    /**
   * 
   * @param {*} newVeloMobile 
   * @returns 
   */
  static postVeloMobile(newVeloMobile) {
    return fetch(`${RemoteData.url}velosMobiles/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newVeloMobile)
    })
      .then((response) => {
        console.log(`response.status de post VeloMobile`, response.status);
        if (response.status !== 201) throw new Error("Erreur " + response.status)
        return response.json();
      })
      .then(data => { console.log(`data reçue après le post : `, data); })

  }

  /**
   * 
   * @param {*} updatedVeloMobile 
   * @returns Promise
   */
      static putVeloMobile(updatedVeloMobile) {
    return fetch(`${RemoteData.url}velosMobiles/${updatedVeloMobile.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(updatedVeloMobile)
    })
      .then((response) => {
        console.log(`response.status de put VeloMobile`, response.status);
        if (response.status !== 200) throw new Error("Erreur " + response.status)
        return response.json();
      })
      .then(data => { console.log(`data reçue après le put : `, data); })

  }
}