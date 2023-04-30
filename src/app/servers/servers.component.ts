import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverCreated = false;
  allowNewServer = true;
  servers = [
    'TestServer',
    'TestServer2',
  ]

  serverName = 'TestServer'

  serverCreationStatus = 'No server was created'

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  constructor() {
  }

  onPasswordToggle() {
    this.displayPassword = !this.displayPassword
    this.buttonClicksArray.push(new Date())
  }

  displayPassword = false;

  buttonClicksArray = [];

}
