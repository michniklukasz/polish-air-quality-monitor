import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationSelectionComponent } from './station-selection/station-selection.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { StationDetailsComponent } from './station-details/station-details.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { SensorDataComponent } from './sensor-data/sensor-data.component';
import { UserAutoLocalizationComponent } from './user-auto-localization/user-auto-localization.component';
import { ConnectionErrorComponent } from './connection-error/connection-error.component';
import { VoivodeshipFilterPipe } from './station-selection/voivodeship-filter.pipe';
import { CityFilterPipe } from './station-selection/city-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    StationSelectionComponent,
    StationDetailsComponent,
    SensorDataComponent,
    SpinnerComponent,
    UserAutoLocalizationComponent,
    ConnectionErrorComponent,
    CityFilterPipe,
    VoivodeshipFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'main', component: StationSelectionComponent },
      { path: 'station', component: StationDetailsComponent },
      { path: 'connection-error', component: ConnectionErrorComponent },
      { path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
