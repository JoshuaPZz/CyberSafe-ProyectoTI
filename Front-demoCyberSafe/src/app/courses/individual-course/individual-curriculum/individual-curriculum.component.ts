import { Component } from '@angular/core';
import { CourseViewComponent } from "../../course-view/course-view.component";
import { TopBarComponent } from "../../../menu/top-bar/top-bar.component";

@Component({
  selector: 'app-individual-curriculum',
  imports: [CourseViewComponent, TopBarComponent],
  templateUrl: './individual-curriculum.component.html',
  styleUrl: './individual-curriculum.component.css'
})
export class IndividualCurriculumComponent {

}
