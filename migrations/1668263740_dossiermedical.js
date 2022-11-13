const dossiermedical = artifacts.require('dossiermedical');
module.exports= function(deployer){
  deployer.deploy(dossiermedical);
}
