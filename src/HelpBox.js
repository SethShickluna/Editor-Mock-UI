function HelpBox(){
    return(
        <div className="help-box">
            <div>
                <h3 className="editor-subtitle">
                    Help
                </h3>
            </div>
            <div>
                <h5 className="editor-subtitle">
                    Frequently Asked Questions
                </h5>
            <ol className="FAQ-List-OL">
                <li>
                    <span class="FAQ-Question">Q: How do I import media?</span> <br/>
                    <span class="FAQ-Answer">A: Drop files onto the editor or right click and "Import Media".</span>  
                </li>
                <li>
                    <span class="FAQ-Question">Q: How do I import media?</span> <br/>
                    <span class="FAQ-Answer">A: Drop files onto the editor or right click and "Import Media".</span>  
                </li>
                <li>
                    <span class="FAQ-Question">Q: How do I import media?</span> <br/>
                    <span class="FAQ-Answer">A: Drop files onto the editor or right click and "Import Media".</span>  
                </li>
                <li>
                    <span class="FAQ-Question">Q: How do I import media?</span> <br/>
                    <span class="FAQ-Answer">A: Drop files onto the editor or right click and "Import Media".</span>  
                </li>
                <li>
                    <span class="FAQ-Question">Q: How do I import media?</span> <br/>
                    <span class="FAQ-Answer">A: Drop files onto the editor or right click and "Import Media".</span>  
                </li>
            </ol>
            <h5 className="editor-subtitle">
                Video Tutorials
            </h5>
            <ul className="FAQ-List-UL">
                <li><a href="www.youtube.com">Adding Transitions</a></li>
                <li><a href="www.youtube.com">Recording Audio</a></li>
                <li><a href="www.youtube.com">Exporting</a></li>
                <li><a href="www.youtube.com">Custom Keyframes</a></li>
            </ul>
            <h5 className="editor-subtitle">
                Full Program Documentation
            </h5>
            <p style={{margin:"10px", color:"#c8d6e5"}}>Full documentation and instructions for this software can be found <a href="www.google.ca">here</a> on our website.</p>
        </div>
        
    </div>
    )
}; 

export default HelpBox; 