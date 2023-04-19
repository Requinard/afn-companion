let pkgs = import <nixpkgs> { };
in pkgs.mkShell {
  buildInputs = with pkgs; [
    cypress
    nodejs
  ];

  shellHook = ''
  yarn cypress:install
  export CYPRESS_INSTALL_BINARY=$HOME/.cache/Cypress/12.8.1/Cypress/Cypress
  '';
}