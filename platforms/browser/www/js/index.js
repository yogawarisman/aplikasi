/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.addEventListener("backbutton", onBackKeyDown, false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {        
    }
};

//0=a; 1=b; 2=c; 3=d; 4=e; 
 correctAnswers=[0,1,2,3,4];
var AnsweredCorrectly=0;
	function start(){
	document.getElementById('quizstart').style.display="none";
	document.getElementById('question0').style.display="block";
	}
	function toggle(a,b){
	AnsweredCorrectly+=(document.getElementsByName('ans'+a)[correctAnswers[a]].checked?1:-1);
	document.getElementById('question'+a).style.display="none";
	document.getElementById('question'+b).style.display="block";
	}
	function end(a){
	AnsweredCorrectly+=(document.getElementsByName('ans'+a)[correctAnswers[a]].checked?1:-1);
	document.getElementById('question'+a).style.display="none";
	document.getElementById('summary').style.display="block";
	document.getElementById('result').innerHTML=AnsweredCorrectly;
	}
	function cobalagi(){
	location.reload(true);
	AnsweredCorrectly=0;
	}