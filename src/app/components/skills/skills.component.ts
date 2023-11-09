import { Component, OnInit } from '@angular/core';
import { BESkills, FESkills, Skills, otherSkills, progSkills } from './skills';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  prog: Skills[] = progSkills;
  FE: Skills[] = FESkills;
  BE: Skills[] = BESkills;
  other: Skills[] = otherSkills;

  ngOnInit(): void {
  }
}
