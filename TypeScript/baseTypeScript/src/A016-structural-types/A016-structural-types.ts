type verifyUserFn = (User: user, sentValue: user) => boolean;
type user = { username: string; password: string };

const verifyUser: verifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

// ts não é restritivo se tiver a chave e for corresponde ao que pede, vai dar
//ts liga para o conteúdo do type não para a identidade
const bdUser = { username: 'Gustavo', password: '1234', naan: 12 };
const sentUser: user = { username: 'Gustavo', password: '1234' };

const verify = verifyUser(bdUser, sentUser);

console.log(verify);
