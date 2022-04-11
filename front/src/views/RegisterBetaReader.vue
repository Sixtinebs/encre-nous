<template>
  <div>
    <p>Votre profil debêta-lecteur</p>
    <p>Ut gravida semper eros, ac mattis ligula bibendum at. Vivamus tempor nec arcu malesuada faucibus.</p>
    <p> dictum turpis, at elementum magna fermentum sit amet.nec arcu malesuada faucibus. Vestibulum ante ipsum primis in faucibus </p>
    <p>orci luctus et ultrices posuere cubilia curae; Praesent lacus elit, aliquet et malesuada vel, finibus et nibh. Nunc consectetur massa sem, vitae luctus ante sodales nec. Sed sapien erat, tempus tristique orci sit amet, semper eleifend nibh. </p>

  </div>
  <form>
    <div class="info-user">
      <label for="last-name">Votre nom</label>

      <input
        type="text"
        id="last-name"
        name="last-name"
        required
        minlength="4"
        maxlength="50"
      >

    </div>
    <div class="info-user">
      <label for="first-name">Votre Prénom</label>

      <input
        type="text"
        id="first-name"
        name="first-name"
        required
        minlength="4"
        maxlength="50"
      >
    </div>
    <div class="info-user">
      <label for="birthday">Votre date de naissance</label>

      <input
        type="date"
        id="birthday"
        name="birthday"
      >
    </div>
    <div class="info-user">
      <label for="description">Décrivez-vous </label>

      <input
        type="text"
        id="description"
        name="description"
      >
    </div>
    <div class="info-user">
      <div id="options-experiences">
        <div class="option-experience">
          <input
            type="radio"
            id="option-1"
            name="experience"
            value="Moins de 6 mois"
          >
          <label for="experience">Moins de 6 mois</label>
        </div>
        <div class="option-experience">
          <input
            type="radio"
            id="option-2"
            name="experience"
            value="6 mois à 2 ans"
          >
          <label for="experience">6 mois à 2 ans</label>
        </div>
        <div class="option-experience">
          <input
            type="radio"
            id="option-3"
            name="experience"
            value="Entre 2 et 5ans"
          >
          <label for="experience">Entre 2 et 5ans</label>
        </div>
        <div class="option-experience">
          <input
            type="radio"
            id="option-4"
            name="experience"
            value="Plus de 5 ans"
          >
          <label for="experience">Plus de 5 ans</label>
        </div>
      </div>
    </div>

     <div class="info-user">
         <input
         type="file"
         id="img-profil"
         name="img-profil"
         >
         <label for="img-profil"></label>
     </div>

     <div class="info-user">
         <input
         type="text"
         id="prices"
         name="prices"
         >
         <label for="prices"></label>
     </div>
     <input type="submit" />

  </form>

</template>

<script>
export default {};
</script>

<style>
/* first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        user_id: user.id,
                        birthday: req.body.birthday,
                        description: req.body.description,
                        img: req.body.img,
                        experience: req.body.experience,
                        method_working: req.body.method_working  */
</style>