import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ReplyService } from './reply.service';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './app/replys/replys.component.html'
})

export class ReplysComponent implements OnInit {

    replyForm: FormGroup;
    Message: string;
    errorMessage: string;

    public visitorformId: number;
    public userId: number;

    public pvisible = true;

    constructor(
        private router: Router,
        private fb: FormBuilder, private _postService: ReplyService, private route: ActivatedRoute,
    ) { }

    ngOnInit() { 

        this.route.params.subscribe((params: Params) => {

            this.visitorformId = params['vid'];
            this.userId = params['uid'];


            this._postService.ReplyDetailsbyId(this.visitorformId).subscribe(
                answer => {
                    if (answer.length > 0) {

                        this.pvisible = false;

                        let replymessage, approvestatus= " ";
                        replymessage = answer[0].ReplyMessage;
                        approvestatus = answer[0].ApproveStatus;
                        

                        this.replyForm = this.fb.group({
                        UserID: [this.userId],
                        VisitorFormID: [this.visitorformId],
                        ReplyMessage: [replymessage, Validators.required],
                        ApproveStatus: [approvestatus, Validators.required]                       
                    });
                         
                    }

                    else
                    {
                        this.replyForm = this.fb.group({
                        UserID: [this.userId],
                        VisitorFormID: [this.visitorformId],
                        ReplyMessage: ['', Validators.required],
                        ApproveStatus: ['', Validators.required]                       
                        });

                    }

                },
                error => {
                    //this.errorMessage = <any>error

                    return this.Message = "An Error Occured: Try Again";

                }
            );

        //this.replyForm = this.fb.group({
        //                UserID: [this.userId],
        //                VisitorFormID: [this.visitorformId],
        //                ReplyMessage: ['', Validators.required],
        //                ApproveStatus: ['', Validators.required]                       
        //            });


 
        }); 
    }

    update() {
        let body = this.replyForm.value;    

        console.log(body);

        this._postService.replyUser(body).subscribe(
            data => {                
                return this.Message = "Reply Done Successfully";
            },
            error => {
 
                return this.Message = "An Error Occured: Try Again";
                  
            }
        );

    }

}
