/* global Autodesk, Three */
import Client from "../OAuth";
import axios from "axios";

var getToken = {accessToken : Client.getAccesstoken()};
var viewer

function launchViewer(div, urn){
    getToken.accessToken.then((then) => {
        var options = {
            'env' : 'AutodeskProduction',
            'accessToken' : 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOndyaXRlIiwiZGF0YTpjcmVhdGUiLCJkYXRhOnJlYWQiLCJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJHMVhDZk44VktCdUdhWGVETGtoWnRGaDBwWFFMVEQ1SCIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwMTQ0MCIsImp0aSI6IkU0YWRzTm5ZalVOZm9QUEx4dm9YdWdyVEZkSFBjSUl5UHpuTTU4UzVKTUhqWXNNeDZDMzRiUko0UjhZallSa3giLCJ1c2VyaWQiOiJIUkEyTVZMQ042S0pBU05UIiwiZXhwIjoxNjczMzM0MDQzfQ.fWQ_UMdX1_71LprQLo_GM8skP-eEzCqGat3ycDw6PHIUq3A11tUXeDN-hfj96iWUusSHuxnrn-WnPuTYC5FmY80dAVEAJeIVr_drD7aFnRrMuTWIJ5xJ_oIbDe4GG1dDffPgaPSxJNnoQN5MN4PDBY_1tuLICVkkCbKJp1yp_ig81og1pclDi9zkQTGQBSVMWbkbhRbflBk1NOdSsIGpjwkwPiKqBgOW-GaS_4-PdEI0mP4NazE67PYhs9P0Zbv-jxFFw8ge9703k8xF2I0EzyYas0_OqOZ_NAy-nwLdBh57H3MoucV2NGXAwRfaa4aksc_Hf-Mf_AKZ60fsm9nhag',
        };

        Autodesk.Viewing.Initializer(options, function() {

            var htmlDiv = document.getElementById(div);
            viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
            var startedCode = viewer.start();
            if (startedCode > 0) {
                console.error('Failed to create a Viewer: WebGL not supported.');
                return;
            }
        
            console.log('Initialization complete, loading a model next...');
        
        });

        var documentId = urn;
        Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);

        function onDocumentLoadSuccess(viewerDocument) {
            var defaultModel = viewerDocument.getRoot().getDefaultGeometry();
            viewer.loadDocumentNode(viewerDocument, defaultModel);
        }

        function onDocumentLoadFailure() {
            console.error('Failed fetching Forge manifest');
        }

    })
}


export default launchViewer;